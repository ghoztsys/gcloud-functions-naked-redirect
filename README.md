# gcloud-function-naked-redirect

Simple Google Cloud Run function to redirect naked domain to any subdomain (defaults to `www`).

## Setup

To use [Google Cloud Run Functions](https://cloud.google.com/functions), you need the following APIs enabled:

- [Cloud Build API](https://console.cloud.google.com/apis/library/cloudbuild.googleapis.com) (`cloudbuild.googleapis.com`)
- [Cloud Functions API](https://console.cloud.google.com/apis/library/cloudfunctions.googleapis.com) (`cloudfunctions.googleapis.com`)
- [Cloud Logging API](https://console.cloud.google.com/apis/library/logging.googleapis.com) (` logging.googleapis.com`)
- [Cloud Pub/Sub API](https://console.cloud.google.com/apis/library/pubsub.googleapis.com) (`pubsub.googleapis.com`)

## Usage

```sh
# Run locally
$ npm run dev

# Build for production
$ npm run build
```
