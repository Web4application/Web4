using System;
using System.Net;
using System.IO;
using System.Text;
public class Program
{
  public static void Main()
  {   
      ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;
      HttpWebRequest request = (HttpWebRequest)WebRequest.Create("https://ipapi.co/json/");
      request.UserAgent="ipapi.co/#c-sharp-v1.03";
      HttpWebResponse response = (HttpWebResponse)request.GetResponse();
      var reader = new System.IO.StreamReader(response.GetResponseStream(), UTF8Encoding.UTF8);
      Console.WriteLine(reader.ReadToEnd());
  }
}
