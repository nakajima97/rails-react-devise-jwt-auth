Rails.application.routes.draw do
  devise_for :users, path: '/user', 
  path_names: {
    sign_in: 'login',
    sign_out: 'logout',
    registrations: 'registrations'
  },
  controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }
end
