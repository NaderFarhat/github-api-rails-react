class Repository < ApplicationRecord
    validates :name, :presence => true
<<<<<<< HEAD
    validates :login_name, :presence => true
    validates :stars, :presence => true
    validates :language, :presence => true
=======
    validates :name, :uniqueness => true
    validates :login_name, :presence => true
    validates :stars, :presence => true
    validates :language, :presence => true
    
>>>>>>> make it better
end
