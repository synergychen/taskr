class TasksController < ApplicationController
  def index
    @tasks = current_user.tasks
    @task = current_user.tasks.new
  end

  def create
    @task = current_user.tasks.new(task_params)
    if @task.save
      redirect_to :back
    else
      @tasks = current_user.tasks.all
      render :index
    end
  end

  private

  def task_params
    params.require(:task).permit(:title, :description)
  end
end
