package server

import (
	"net/http"
)

func NewServer() *http.Server {
    mux := http.NewServeMux()
    mux.Handle("/", Web())

    return &http.Server{
        Addr: ":8080",
        Handler: mux,
    }
}
