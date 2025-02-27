package main

import (
	"context"
	"log"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/Mitskiyu/copycat/internal/server"
)

func main() {
    server := server.NewServer()

    go func() {
        log.Println("Copycat server starting on port 8080...")
        err := server.ListenAndServe()
        if err != nil && err != http.ErrServerClosed {
            log.Fatalf("Server failed: %v", err)
        }
    }()

    stop := make(chan os.Signal, 1)
    signal.Notify(stop, os.Interrupt, syscall.SIGTERM)

    <- stop

    ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
    defer cancel()

    err := server.Shutdown(ctx)
    if err != nil {
        log.Fatalf("Server forced to shutdown: %v", err)
    }
}
