defmodule ProjectWeb.RegistrationController do









  use ProjectWeb, :controller

  def register(conn, %{"username" => _, "password" => _} = params) do
    Project.User.changeset(%Project.User{}, params)
    render(conn, "register.json", params: params)
  end
end
