defmodule ProjectWeb.Router do
  use ProjectWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  # user_path  POST    /users           HelloWeb.UserController :create

  scope "/", ProjectWeb do
    pipe_through :api

    post("/register", RegistrationController, :register)
  end

  # Other scopes may use custom stacks.
  # scope "/api", ProjectWeb do
  #   pipe_through :api
  # end

  # Enables LiveDashboard only for development
  #
  # If you want to use the LiveDashboard in production, you should put
  # it behind authentication and allow only admins to access it.
  # If your application does not have an admins-only section yet,
  # you can use Plug.BasicAuth to set up some basic authentication
  # as long as you are also using SSL (which you should anyway).
  if Mix.env() in [:dev, :test] do
    import Phoenix.LiveDashboard.Router

    scope "/" do
      pipe_through :browser
      live_dashboard "/dashboard", metrics: ProjectWeb.Telemetry
    end
  end
end
