'use strict';

{
  // 行／列のマス数
  const mathNum = 10;
  // 代入する数値の元配列
  const arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // RELOADボタンの取得
  const btnReload = document.querySelector('.btn_reload');
  // gridの枠となる<ul>要素の取得
  const list = document.querySelector('.math_list');

  /**
   * RELOADボタン押下時の処理
   */
  btnReload.addEventListener('click', () => {
      // リセット
      window.location.reload();
  });

  /**
   * createMath
   * 100マスクイズの生成
   */
  const createMath = (() => {
    let arrNum_row = arrNum.slice();
    let arrNum_column = arrNum.slice();

    // li要素の作成と数値の代入（0行・0列要素）
    for (let i = 0; i < mathNum; i++) {
      for (let j = 0; j < mathNum; j++) {
        let item = document.createElement('li');
        item.classList.add(`{${i},${j}}`);
        
        // 列（1列目～9列目の先頭）へのランダム数値代入
        if ((i === 0) && (j > 0)) {
          item.textContent = arrNum_column.splice(Math.floor(Math.random() * arrNum_column.length), 1);
        }
        // 行（1行目～9行目の先頭）へのランダム数値代入
        else if ((j === 0) && (i > 0)) {
          item.textContent = arrNum_row.splice(Math.floor(Math.random() * arrNum_row.length), 1);
        } else {
          // nothing doing
        }
        list.appendChild(item);
      }
    }
  });

  // 100マスクイズ生成関数呼び出し
  createMath();
}