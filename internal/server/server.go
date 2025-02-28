package server

import (
	"encoding/json"
	"net/http"
)

type MetadataResponse struct{
    Status string `json:"status"`
    Format string `json:"format"`
    Width  int    `json:"width"`
    Height int    `json:"height"`
}

func uploadHandler(w http.ResponseWriter, r *http.Request) {
    img, format, err := processUpload(r)
    if err != nil {
        http.Error(w, err.Error(), http.StatusBadRequest)
        return
    }

    metadata := processImage(img)
    res := MetadataResponse {
        Status: "success",
        Format: format,
        Width:  metadata.width,
        Height: metadata.height,
    }

    w.Header().Set("Content-Type", "application/json")
    w.WriteHeader(http.StatusOK)
    if err := json.NewEncoder(w).Encode(res); err != nil {
        http.Error(w, "Could not encode metadata response", http.StatusInternalServerError)
        return
    }
}

func NewServer() *http.Server {
    mux := http.NewServeMux()
    mux.Handle("/", Web())
    mux.HandleFunc("/upload", uploadHandler)

    return &http.Server{
        Addr: ":8080",
        Handler: mux,
    }
}
