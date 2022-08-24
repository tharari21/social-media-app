class UsersController < ApplicationController
	def login
		user = User.find_by!(email: params[:email])
		puts user
		if user && user.password_digest == params[:password]
			render json: user, status: :ok
		else
			render json: {error: "invalid username/password"}, status: 404
		end
	end

end
