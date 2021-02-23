class User < ApplicationRecord
    validates :first_name, :last_name, :email, :primary_location, :password_digest, :session_token, presence: true
    validates :email, :session_token, uniqueness: true
    validates :password, length: {minimum: 6}, allow_nil: true
    after_initialize :ensure_session_token

    attr_reader :password
    
    has_many :reservations,
        class_name: :Reservation,
        foreign_key: :user_id,
        primary_key: :id
        
    # has_many :favorites
    # has_many :favorite_restaurants,
    #     through: :favorites,
    #     source: :restaurant
    # has_many :reviews dependent destroy

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user
        user.is_password?(password) ? user : nil
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end
    
    def self.generate_session_token
        SecureRandom.urlsafe_base64
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end


    def reset_session_token!
        self.session_token = self.class.generate_session_token
        self.save!
        self.session_token
    end

    private
    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end

end
