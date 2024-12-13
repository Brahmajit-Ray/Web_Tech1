import requests

# URL of the image
image_url = "https://upload.wikimedia.org/wikipedia/commons/e/ef/Virat_Kohli_during_the_India_vs_Aus_4th_Test_match_at_Narendra_Modi_Stadium_on_09_March_2023.jpg"

# Path where the image will be saved
save_path = "Virat.jpg"

try:
    # Send a GET request to the image URL
    response = requests.get(image_url, stream=True)
    response.raise_for_status()  # Raise an error for HTTP codes 4xx/5xx

    # Open a file in binary write mode and save the image content
    with open(save_path, "wb") as file:
        for chunk in response.iter_content(chunk_size=8192):  # Download in chunks
            file.write(chunk)

    print(f"Image successfully downloaded and saved as {save_path}")

except requests.exceptions.RequestException as e:
    print(f"An error occurred: {e}")
