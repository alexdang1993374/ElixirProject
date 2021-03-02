defmodule ProjectWeb.RegistrationController do











  use ProjectWeb, :controller

  def register(conn, %{"username" => _, "password" => _} = params) do
    alex = Project.User.changeset(%Project.User{}, params)
    Project.Repo.insert(alex)
    render(conn, "register.json", params: params)
  end
end
