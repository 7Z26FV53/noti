# Getting Started

## Server setup

### Frontend

create `.env.local` add API keys copied from pusher.com, should be like;

```
app_id = <your_app_id>
key = <your_public_key>
secret = <secret>
cluster = <cluster>
```

run the following commands under under `/frontend`:

```bash
npm i
npm run build
npm run dev
```

### Backend

run the following commands under `/backend`:
install all required packages
(sorry i didn't know how to use `requirements.txt` properly yet)

```bash
pip install Flask
pip install pusher
pip install cors
pip install python-dotenv
```

then run the backend server, it should be running on port `5000` (by default)
```
flask --app app run
```

## Run the app on your browsesr

http://localhost:3000/

## Reference

- https://flask.palletsprojects.com/en/2.3.x/quickstart/
- https://pusher.com/docs/channels/using_channels/events/#triggering-client-events
- https://pusher.com/docs/channels/getting_started/javascript/
- https://pusher.com/docs/channels/using_channels/events/
- https://github.com/onedebos/pusher-chat-app
- https://dev.to/jakewitcher/using-env-files-for-environment-variables-in-python-applications-55a1