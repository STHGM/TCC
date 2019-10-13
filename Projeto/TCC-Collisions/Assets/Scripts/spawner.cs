using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class spawner : MonoBehaviour {

	public GameObject character = null;
	public float speed = 10f;
	public float delay = 1.0f;
	public float repeat = 0.0f;
	public float translate;

	void Start () {
		InvokeRepeating("spawn", repeat, delay);
	}
	
	void Update () {
		transform.Rotate(Vector3.back, speed * Time.deltaTime);
		transform.Translate(translate, 0, 0);
	}

	void spawn() {
		Instantiate (
			character,
			transform.position,
			Quaternion.identity
		);
	}
}
