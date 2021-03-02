defmodule ProjectWeb.RegistrationController do























  use ProjectWeb, :controller

  def register(conn, _params) do
    render(conn, "register.json")
  end
end
