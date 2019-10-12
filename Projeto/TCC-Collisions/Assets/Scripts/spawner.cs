using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class spawner : MonoBehaviour {

	public GameObject character = null;
	public float speed = 10f;
	public float delay = 1.0f;
	public float repeat = 0.0f;
    public float velocidade;

    private GameObject clone;

	// Use this for initialization
	void Start () {
		// transform.Rotate(rotx, roty, rotz);
		InvokeRepeating("spawn", repeat, delay);
	}
	
	// Update is called once per frame
	void Update () {
		transform.Rotate(Vector3.back, speed * Time.deltaTime);
		transform.Translate(0.01f, 0, 0);
	}

	void spawn() {
        clone = (GameObject)Instantiate(character, transform.position, Quaternion.Euler(0, 0, 0));
        clone.GetComponent<Rigidbody2D>().velocity = velocidade * transform.localScale.x * clone.transform.right;
	}
}
