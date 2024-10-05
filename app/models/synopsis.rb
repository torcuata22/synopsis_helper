class Synopsis < ApplicationRecord
  validates :title, presence: true
  validates :characters, presence: true
  validates :main_conflict, presence: true
  validates :paragraph1, presence: true
  validates :paragraph2, presence: true
  validates :paragraph3, presence: true
  validates :email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP }
end
