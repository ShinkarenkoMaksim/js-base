alert('var a = 1, b = 1, c, d; \n c = ++a; alert(c);           // 2 - префиксная запись оператора ++ возвращает новое значение переменной\n d = b++; alert(d);           // 1 - постфиксная запись оператора ++ возвращает старое значение переменной\n c = (2+ ++a); alert(c);      // 5 - префиксная запись оператора ++ возвращает новое значение переменной\n d = (2+ b++); alert(d);      // 4 - постфиксная запись оператора ++ возвращает старое значение переменной\n alert(a);                    // 3 - дважды была выполнена операция инкремента\n alert(b);                    // 3 - дважды была выполнена операция инкремента');