## OpenAI Image Generation Backend Server

This Node.js backend server is designed to generate images using OpenAI's image generation API based on specified prompts.

### Getting Started

To use this backend server, follow these instructions:

##### Prerequisites

- Node.js installed on your machine
- An OpenAI API key

##### Configuration

- Create a .env file in the root directory.
- Add your OpenAI API key to the .env file as follows:
  `API_KEY=your_openai_api_key_here`

##### Usage

###### Base URL: https://open-ai-image-generation-server.vercel.app

###### Endpoint: `/generate-image`

- Method: `POST`

###### Request Body:

Send a `POST` request to `/generate-image` with the following JSON payload:

```
{
  "prompt": "your_prompt_here"
}
```

Replace "your_prompt_here" with the desired prompt for image generation.

###### Response

- Successful response (Status Code: 200): The response will contain the generated image URL.

```
{
    "image": "https://image.url"
}
```

- Error response (Status Code: 400): If any error occurs during image generation, an error message will be provided in the response.

```
{
    "error": "error_message"
}
```

##### Important Notes

- Each user must use their own OpenAI API key and store it securely in the .env file.
- Ensure proper error handling is implemented in your application to manage error responses.
- Make sure you have credits in your OpenAI's account otherwise you may get an error with a message `Billing hard limit has been reached`.
