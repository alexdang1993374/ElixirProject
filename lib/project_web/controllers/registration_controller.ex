defmodule ProjectWeb.RegistrationController do









  use ProjectWeb, :controller

  def register(conn, params) do
    render(conn, 'index.html')
  end
end
