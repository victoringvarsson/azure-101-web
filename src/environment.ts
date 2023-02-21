export interface Environment {
  baseUrl: string
}

const prod: Environment = {
  // baseUrl: "http://localhost:7071",
  baseUrl: "https://api.victori.course.connect.axis.com",
  // baseUrl: "https://func-http-get-joke.azurewebsites.net",
}

export const environment: Environment = prod
