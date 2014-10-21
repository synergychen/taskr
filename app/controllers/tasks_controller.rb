class TasksController < ApplicationController
  before_action :require_login

  def index
    @incomplete_tasks = current_user.tasks.incomplete
    @task = current_user.tasks.new
  end

  def create
    @task = current_user.tasks.new(task_params)
    if @task.save
      redirect_to :back
    else
      @incomplete_tasks = current_user.tasks.incomplete
      render :index
    end
  end

  private

  def task_params
    params.require(:task).permit(:title, :description)
  end
end
