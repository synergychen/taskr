class TasksController < ApplicationController
  before_action :require_login

  def index
    @incomplete_tasks = current_user.tasks.incomplete
    @complete_tasks = current_user.tasks.complete
    @task = current_user.tasks.new
  end

  def create
    @task = current_user.tasks.new(task_params)

    if @task.save
      render @task
    else
      render partial: "error_messages",
        locals: { target: @task },
        status: 422
    end
  end

  def update
    task = current_user.tasks.find(params[:id])
    task.update(task_params)
    redirect_to :back
  end

  def destroy
    task = current_user.tasks.find(params[:id])
    task.destroy
    render json: { taskId: params[:id] }
  end

  private

  def task_params
    params.require(:task).permit(:title, :description, :completion)
  end
end
