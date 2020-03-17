# C#

## Done list

### ジェネリック（generics: 総称性）or総称的プログラミング（generic programming）

- ジェネリック： 型だけ違って処理の内容が同じようなものを作るときに使う。

- ジェネリッククラス：`IComparable { int CompareTo(T x, T y); }`

- ジェネリックメソッド：`T max(T x, T y) { ... }`

  

### ジェネリックの記法

#### クラス

```c#
class クラス名<型引数>
  where 型引数中の型が満たすべき条件
{
  クラス定義
}
```

#### メソッド

```c#
アクセスレベル 戻り値の型 メソッド名<型引数>(引数リスト)
  where 型引数中の型が満たすべき条件
{
  メソッド定義
}
```



## プロパティ(property:所有物、特性)

クラス外部から見るとメンバー変数のように振る舞い、 クラス内部から見るとメソッドのように振舞うもの

### ポイント

- 中（実装側）からはメソッドのように扱え、外（利用側）からはメンバー変数のように見えるもの。
- カプセル化（実装の隠蔽）の原則を崩すことなく、 アクセサー関数の煩雑さを解消。

### 用語

- **アクセサー**(accessor)：メンバー変数の値の取得・変更を行うためのメソッドのこと

### 使い方と例

#### 記法の例

set 移行のブロックに値の変更用の処理を、 get 移行のに値の取得用の処理を書きます。 これらを、set アクセサー、get アクセサーと呼びます。 あるいは、通称では **setter**、**getter** と呼んだりします。

```
アクセスレベル 型名 プロパティ名
{
    set
    {
        // setアクセサー（setter とも言う）
        a = 4;//  ここに値の変更時の処理を書く。
        value = a;//  value という名前の変数に代入された値が格納される。
		this.set = value;
    }
    get
    {
        // getアクセサー （getter とも言う）
        //  ここに値の取得時の処理を書く。
        return this.set;//  メソッドの場合と同様に、値はreturnキーワードを用いて返す。
    }
}
```



##### プロパティを用いない場合

```c#
// 「実装の隠蔽」で作った複素数クラス
class Complex
{
  // 実装は外部から隠蔽(privateにしておく)
  private double re; // 実部を記憶しておく
  private double im; // 虚部を記憶しておく

  public double Re(){return this.re;}    // 実部を取り出す
  public void Re(double x){this.re = x;} // 実部を書き換え

  public double Im(){return this.im;}    // 虚部を取り出す
  public void Im(double y){this.im = y;} // 虚部を書き換え

  public double Abs(){return Math.Sqrt(re*re + im*im);}  // 絶対値を取り出す
}

// クラス利用側
class ConcealSample
{
  static void Main()
  {
    // x = 5 + 1i
    Complex x = new Complex();
    x.Re(5);  // x.re = 5
    x.Im(1);  // x.im = 1

    // y = -2 + 3i
    Complex y = new Complex();
    y.Re(-2); // y.re = -2
    y.Im( 3); // y.im =  3

    Complex z = new Complex();
    z.Re(x.Re() + y.Re()); // z.re = x.re + y.re
    z.Im(x.Im() + y.Im()); // z.im = x.im + y.im

    Console.Write("|{0} + {1}i| = {2}\n", z.Re(), z.Im(), z.Abs());
    // |3 + 4i| = 5 と表示される
  }
}
```

例えば↑の複素数クラスのアクセサーをプロパティを使って書き換えると以下のようになります。

```c#
// クラス定義
class Complex
{
    // 実装は外部から隠蔽(privateにしておく)
    private double re; // 実部を記憶しておく
    private double im; // 虚部を記憶しておく

    // 実部の取得・変更用のプロパティ
    public double Re
    {
        set { this.re = value; }
        get { return this.re; }
    }
    /* ↑のコードは意味的には以下のコードと同じ。
    public void SetRe(double value){this.re = value;}
    public double GetRe(){return this.re;}
    メソッドと同じ感覚で使える。
    */

    // 実部の取得・変更用のプロパティ
    public double Im
    {
        set { this.im = value; }
        get { return this.im; }
    }

    // 絶対値の取得用のプロパティ
    public double Abs
    {
        // 読み取り専用プロパティ。
        // setブロックを書かない。
        get { return Math.Sqrt(re * re + im * im); }
    }
}

// クラス利用側
class PropertySample
{
    static void Main()
    {
        ///	↓なにげに、かなりすごい事やってる
        Complex c = new Complex();
        c.Re = 4; // Reプロパティのsetアクセサーが呼び出される。
        c.Im = 3; // Imプロパティのsetアクセサーが呼び出される。
        Console.Write("|{0} + ", c.Re); // Reプロパティのgetアクセサーが呼び出される。
        Console.Write("{0}i| =", c.Im); // Imプロパティのgetアクセサーが呼び出される。
        Console.Write(" {0}\n", c.Abs); // Absプロパティのgetアクセサーが呼び出される。
    }
}
```

### **自動プロパティ**（auto-property, auto-implemented property）

```
public string Name { get; set; }
```

というように、 `get; set;` とだけ書いておくと、

```
private string __name;
public string Name
{
  get { return this.__name; }
  set { this.__name = value; }
}
```

というようなコードに相当するものが自動的に生成されます。 （`__name` という変数名はプログラマが参照できるものではありません。） ちなみに、このコンパイラーによって生成されるフィールド(この例で言うと __name)は、バック フィールド(baking field: 後援フィールド)と呼ばれます。

##### 自動プロパティを用いた↑のコード

```
class Complex
{
    public double Re { get; set; }
    public double Im { get; set; }

    public double Abs
    {
        get { return Math.Sqrt(Re * Re + Im * Im); }
    }
}
```