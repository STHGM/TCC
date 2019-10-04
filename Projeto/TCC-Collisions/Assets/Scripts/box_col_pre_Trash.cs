using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Profiling;

public class box_col_pre_Trash : MonoBehaviour {

	// Use this for initialization
	void Start () {
        // Profiler.logFile = "log_box_col_01"; //Also supports passing "myLog.raw"
        // Profiler.logFile = Application.persistentDataPath + "profilerLog.txt"; //Also supports passing "myLog.raw"
        // Profiler.enableBinaryLog = true;
        // Profiler.enabled = true;
	}
	
	// Update is called once per frame
	void Update () {
		
	}

     void OnCollisionEnter2D(Collision2D col)
    {
        // Profiler.BeginSample("Profiler_Box_OnCollisionEnter2D");
        // Debug.Log("Colidiu com o Objeto");
        // print(col.gameObject.name);
        // if (col.gameObject.name == "Floor")
        // {
        //     Destroy(gameObject);
        // }
        // Profiler.EndSample();
    }

    void OnCollisionStay2D(Collision2D col)
    {}
    
    void OnCollisionExit2D(Collision2D col)
    {}

     void OnTriggerEnter2D(Collider2D col)
    {
    }

    void OnTriggerStay2D(Collider2D col)
    {}
    
    void OnTriggerExit2D(Collider2D col)
    {}
}
