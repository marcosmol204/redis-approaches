# Cache

## What ?
In computing, a cache is a temporary storage area used to store frequently accessed data or instructions. It is a mechanism that improves the performance of a system by reducing the time it takes to access data.
A cache works by storing a copy of data that has been accessed recently or is likely to be accessed in the near future. When a user requests that data again, the system can retrieve it quickly from the cache rather than having to go to the original source to fetch it. This can greatly reduce the time it takes to access the data, as accessing the cache is usually much faster than accessing the original source.
Caches can be found in many different parts of a computing system, including the CPU, web browsers, and operating systems. For example, a web browser may cache images and web pages that you have recently accessed so that the next time you visit those pages, they load more quickly.
Caches can be configured in various ways, such as size and replacement policy, to optimize performance for specific use cases. However, it's important to note that caches can also have negative effects on performance if they are not configured correctly, such as taking up too much memory or storing data that is no longer needed.
## How ?
Let's say we have a function that performs a costly operation, such as fetching data from a database or making an expensive calculation. 
We can implement a cache exposing the following functions:
```
interface Cache {
  set(key: string, value: unknown, ttl: number): Result;
  get(key: string): Result;
  del(key: string): Result;
}
```
set receives the key of the cached value, the value it self and time to live. In other words what to store and how long.  
get receives the key of the desired cached value.  
del receives the key of the value we want to invalidate.  
