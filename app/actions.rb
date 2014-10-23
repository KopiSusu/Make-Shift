# Homepage (Root path)
get '/' do
  erb :index
end

get '/project' do
  erb :'projects/project'
end


get '/find' do
  erb :'projects/find'
end

get '/login' do
  erb :'projects/login'
end

