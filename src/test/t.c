建表：
void createSqlList(Sqllist L){
  int i;
  for(i=0;i<L.length;i++){
    L.elem[i]=i;
    L.length++;
  }
}


增加：
void insertSqlList(Sqllist L,int i, ElemType x){
  if (L.length == maxsize) error(‘表满’);    /*溢出*/
      if (((i<1)!!(i>L.length+1)) error (‘非法位置’);
  for(j=L.length;j>=i;j--){
    L.elem[j]=L.elem[j-1];
  }
  L.elem[i=1]=x;
  L.length++;
}


删除：
void deleteSqlList(Sqllist L,int i){
  If  ( ( i<1 ) !! (I >L.length)) error (‘非法位置’);
  for(j=i;j<L.length;j++){
    L.elem[j-1]=L.elem[j];
  }
  L.length--;
}

输出：
void printSqlList(Sqllist L){
  int i;
  for(i=0;i<L.length;i++){
    printf("%d",i);
  }
}


定位：
void locateSqlList(Sqllist L,ElemType x){
  int i=0 ;
  While ( ( i<= L.length) && (L.data[i]!=x) )   /*注意：ai在L.data[i-1]中*/
    i++;                              /*从前往后查找*/
    if (i<=L.last) return i+1;
    else return (0)
  }
}