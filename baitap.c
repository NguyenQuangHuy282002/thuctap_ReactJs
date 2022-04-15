#include <stdio.h>

// bai 1
int findEvenNum()
{
    int i;
    int numTest;
    int num;
    int array[num];
    int arr[num];
    printf("Number of test: \n");
    scanf("%d", &numTest);
    printf("Number of element: \n");
    scanf("%d", &num);
    printf("Number of element: \n");
    scanf("%d", array);

    for (i = 0; i < num; i++)
    {
        if (array[i] % 2 == 0)
        {
            arr[i] = array[i];
        }
    }
    return arr[i];
}

int main()
{

    findEvenNum();
    return 0;
}
