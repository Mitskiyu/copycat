package server

import (
	"embed"
	"io/fs"
    "log"
	"net/http"
)

//go:embed dist/*
var webAssets embed.FS

func Web() http.Handler {
    app, err := fs.Sub(webAssets, "dist")
    if err != nil {
        log.Fatalf("Could not find dist folder: %v", err)
        return nil
    }

    return http.FileServerFS(app)
}
