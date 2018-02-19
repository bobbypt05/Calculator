function display(x)
		{
			if(x>=0&&x<=9)
				calc.txt.value=calc.txt.value+x;
			else
			{
				/*if((charAt(calc.txt.value.substr(length-1))=='+'||charAt(calc.txt.value.substr(length-1))=='-'))
				{
					//calc.txt.value=calc.txt.value.slice(0,calc.txt.value.length-1);
					calc.txt.value=calc.txt.value+x;
				}
				else*/
					calc.txt.value=calc.txt.value+x;
			}
		}

		function clearAll()
		{
			calc.txt.value='';
		}
		function clearOne()
		{
			calc.txt.value=calc.txt.value.slice(0,calc.txt.value.length-1);
		}