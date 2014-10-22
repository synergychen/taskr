class Task < ActiveRecord::Base
  belongs_to :user

  validates :title, presence: true
  validates :description, presence: true

  def self.incomplete
    where(completion: false)
  end

  def self.complete
    where(completion: true)
  end
end
