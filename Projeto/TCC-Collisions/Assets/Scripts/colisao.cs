using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Profiling;

public class colisao : MonoBehaviour {

	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
		
	}

     void OnCollisionEnter2D(Collision2D col)
    {
        Profiler.BeginSample("Minha Colisao");
        Debug.Log("Colidiu com");
        print(col.gameObject.name);
        if (col.gameObject.name == "Floor")
        {
            Destroy(gameObject);
        }
        Profiler.EndSample();
    }
}
