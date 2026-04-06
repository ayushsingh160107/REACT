import 'dart:io';

double add(double a, double b) {
  return a + b;
}
double sub(double a, double b) {
  return a - b;
}
double mul(double a, double b) {
  return a * b;
}
double div(double a, double b) {
  if (b == 0) {
    print("Divide by Zero");
    return 0;
  }
  return a / b;
}


void main() {

  stdout.write("Input No. 1 ");
  double n1 = double.parse(stdin.readLineSync()!);

  stdout.write("Input No. 1  ");
  double n2 = double.parse(stdin.readLineSync()!);

  print("Your Choice ");
  print("1. Add");
  print("2. Subtract");
  print("3. Multiply");
  print("4. Divide");

  stdout.write("Enter 1-4 ");
  int choice = int.parse(stdin.readLineSync()!);

  double result;

  switch (choice) {
    case 1:
      result = add(n1, n2);
      print("Result = $result");
      break;
    case 2:
      result = sub(n1, n2);
      print("Result = $result");
      break;
    case 3:
      result = mul(n1, n2);
      print("Result = $result");
      break;
    case 4:
      result = div(n1, n2);
      print("Result = $result");
      break;
    default:
      print("Invalid choice");
  }
}
