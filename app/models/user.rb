class User < ActiveRecord::Base
  validates_presence_of :username, :password, :email
end