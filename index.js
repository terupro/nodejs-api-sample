const express = require("express");
const app = express();
const PORT = 4000;
app.use(express.json());
app.listen(PORT, () => console.log("サーバーが起動しました"));

const customers = [
  { title: "南野", id: 1 },
  { title: "岡崎", id: 2 },
  { title: "香川", id: 3 },
  { title: "大迫", id: 4 },
  { title: "本田", id: 5 },
];

// req = 要求 / res = 応答

app.get("/", (req, res) => {
  // リクエストが来たら何を返すのか
  res.send("Udemy講座を受講中");
});

// お客様情報の取得
app.get("/api/customers", (req, res) => {
  res.send(customers);
});

// お客様情報の追加
app.post("/api/customers", (req, res) => {
  const customer = {
    title: req.body.title,
    id: customers.length + 1,
  };
  customers.push(customer);
  res.send(customer);
});

// お客様情報の更新
app.put("/api/customers/:id", (req, res) => {
  const customer = customers.find((c) => c.id === parseInt(req.params.id));
  customer.title = req.body.title;
  res.send(customer);
});

// お客様情報の削除
app.delete("/api/customers/:id", (req, res) => {
  const customer = customers.find((c) => c.id === parseInt(req.params.id));
  const index = customers.indexOf(customer);
  customers.splice(index, 1);
  res.send(customer);
});
