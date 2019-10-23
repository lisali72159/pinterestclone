class User < ApplicationRecord
  require 'bcrypt'

  attr_reader :password

  validates :email, :password_digest, :session_token, :age, presence: true
  validates :email, uniqueness: true
  validates :session_token, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token

  has_many :authored_boards,
    foreign_key: :author_id,
    class_name: :Board
    
  has_many :pins,
    foreign_key: :author_id
  
  has_many :follows, :as => :followable


  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!  
    self.session_token
  end

  def set_username
    self.first_name = self.email.split("@")[0]
  end

end
