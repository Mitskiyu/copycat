package server

import (
	"fmt"
	"image"
	"net/http"

    _ "image/jpeg"
    _ "image/png"
    _ "image/gif"
)

type Metadata struct {
    width  int
    height int
}

func processUpload(r *http.Request) (image.Image, string, error) {
    err := r.ParseMultipartForm(10 << 20)
    if err != nil {
        return nil, "", fmt.Errorf("Image larger than 10MB: %v", err)
    }

    file, _, err := r.FormFile("image")
    if err != nil {
        return nil, "", fmt.Errorf("Could not retrieve file: %v", err)
    }
    defer file.Close()

    img, format, err := image.Decode(file)
    if err != nil {
        return nil, "", fmt.Errorf("Could not decode image: %v", err)
    }

    return img, format, nil
}

func processImage(img image.Image) Metadata {
    bounds := img.Bounds()

    return Metadata {
        width:  bounds.Dx(),
        height: bounds.Dy(),
    }
}
