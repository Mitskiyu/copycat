package server

import (
	"log"
	"net/http"
)

func RunServer() {
    mux := http.NewServeMux()
    server := http.Server{
        Addr: ":8080",
        Handler: mux,
    }

   mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request){
       w.Write([]byte("Hi, Copycat"))
   })

   log.Println("Copycat server starting on port 8080...")

   err := server.ListenAndServe()
   if err != nil && err != http.ErrServerClosed {
       log.Fatalf("Server failed: %v", err)
   }
}
