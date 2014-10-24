# Homepage (Root path)
helpers do
  def current_user
    current_user ||= User.find_by_username(session[:user])
  end
end

get '/' do
  erb :index
end

get '/project' do
  erb :'projects/project'
end

get'/create' do
  erb :'projects/create'
end


get '/find' do
  erb :'projects/find'
end

get '/login' do
  erb :'projects/login'
end

post '/login' do
  username = params[:username]
  password = params[:password]
  user = User.where(username: username, password: password).first
  if user
    session[:user] = user.username
    session[:user_id] = user.id
    redirect '/'
  else
    redirect '/login'
  end
end

