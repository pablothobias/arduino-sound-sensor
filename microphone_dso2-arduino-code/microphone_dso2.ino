/*
 * Rui Santos 
 * Complete Project Details https://randomnerdtutorials.com
*/

int sensorPin = A0;
float val = 0;
 
void setup()
{
  Serial.begin(9600);
  // pinMode(sensorPin, INPUT);
}
 
void loop()
{
   int sensorValue = analogRead(sensorPin);
 
    Serial.println(sensorValue);
 
    delay(300);
}
