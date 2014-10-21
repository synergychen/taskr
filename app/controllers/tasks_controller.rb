class TasksController < ApplicationController
  before_action :require_login

  def index
    @incomplete_tasks = current_user.tasks.incomplete
    @task = current_user.tasks.new
  end

  def create
    @task = current_user.tasks.new(task_params)
    if @task.save
      render @task
    else
      @incomplete_tasks = current_user.tasks.incomplete
      render :index
    end
  end

  def update
    task = current_user.tasks.find(params[:id])
    task.update(task_params)
    redirect_to :back
  end

  private

  def task_params
    params.require(:task).permit(:title, :description, :completion)
  end
end
