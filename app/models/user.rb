class User < ApplicationRecord
  has_secure_password

  # has_many :books
  validates_uniqueness_of :email

end
