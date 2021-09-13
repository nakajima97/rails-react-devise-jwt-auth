class ProfilesController < ApplicationController
  def show
    if user_signed_in?
      render json: {
        name: current_user.email
      }
    else
      render json: {
        message: "ログインしてください"
    }
    end
  end
end
