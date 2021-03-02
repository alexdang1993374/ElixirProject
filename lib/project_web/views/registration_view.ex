defmodule ProjectWeb.RegistrationView do










  use ProjectWeb, :view

  def render("register.json", %{params: my_params}) do
    %{username: my_params["username"], password: my_params["password"]}
  end
end
