import 'dart:io';

void main() {
  List<String> myList = [];
  bool flag = true;

  while (flag) {
    print("---Menu--");
    print("1. Add a new Task");
    print("2. View added Tasks");
    print("3. Remove Task");
    print("4. Exit");

    stdout.write("Enter your choice: ");
    int choice = int.parse(stdin.readLineSync()!);

    switch (choice) {
      case 1:
        addT(myList);
        break;

      case 2:
        viewT(myList);
        break;

      case 3:
        removeT(myList);
        break;

      case 4:
        flag = true;
        break;

      default:
        print("Wrong choice");
    }
  }
}


void addT(List<String> myList) {
  stdout.write("Enter any task ");
  String task = stdin.readLineSync()!;
  myList.add(task);
}
  

void viewT(List<String> myList)
{
  if (myList.isEmpty) {
    print("No tasks available.");
  } else {
    print("\nYour Tasks:");
    for (int i = 0; i < myList.length; i++)
    {
      print("${i + 1}. ${myList[i]}");
    }
  }
}


void removeT(List<String> myList)
{
  if (myList.isEmpty) {
    print("No tasks to remove.");
    return;
  }

  viewT(myList);
  stdout.write("Enter task number to remove: ");
  int index = int.parse(stdin.readLineSync()!);

  if (index > 0 && index <= myList.length)
  {
    String removedTask = myList.removeAt(index - 1);
    print("Removed task: $removedTask");
  }
  else
  {
    print("Invalid task number.");
  }
}
