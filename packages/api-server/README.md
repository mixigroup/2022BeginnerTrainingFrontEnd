# api-server

Web クライアント用の API 通信コードを Web API のスキーマの OpenAPI 定義から ES Module パッケージとして自動生成します。
また、 API サーバー本体は Git Submodule として https://github.com/MokkeMeguru/spa_guide_sns_server を使用しています。
API サーバーの取り扱いについては [こちらの README](https://github.com/MokkeMeguru/spa_guide_sns_server/blob/main/README.md) を読んでください。
ES Module パッケージの自動生成には下記の通り実行してください。

```sh
npm i
npm run build
```

ES Module パッケージが生成されると、他 workspace から `api-server` のパッケージ名で任意のモジュールを import することができます。
