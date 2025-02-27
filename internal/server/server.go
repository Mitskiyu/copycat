package server

import (
	"net/http"
)


func NewServer() *http.Server {
    mux := http.NewServeMux()

    mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        w.Write([]byte("Hi, Copycat!"))
    })

    return &http.Server{
        Addr: ":8080",
        Handler: mux,
    }
}
