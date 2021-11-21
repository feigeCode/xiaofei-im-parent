package com.feige.im.route;

import java.util.Iterator;
import java.util.ServiceLoader;

/**
 * @author feige<br />
 * @ClassName: RouteManager <br/>
 * @Description: <br/>
 * @date: 2021/11/11 21:58<br/>
 */
public class RouteManager {

    private static  final ServiceLoader<IRoute> iRoutes = ServiceLoader.load(IRoute.class);;


    public static IRoute getIRoutes(){
        Iterator<IRoute> iterator = iRoutes.iterator();
        if (iterator.hasNext()){
            return iterator.next();
        }
        return null;
    }
}
