package com.feige.zk.discovery.impl;

import com.feige.discovery.ProviderService;
import com.feige.discovery.pojo.ServerInstance;

import java.util.List;
import java.util.function.Consumer;

/**
 * @author feige<br />
 * @ClassName: ProviderServiceImpl <br/>
 * @Description: <br/>
 * @date: 2021/11/4 23:27<br/>
 */
public class ProviderServiceImpl implements ProviderService {

    @Override
    public void registerServerInstance(ServerInstance serverInstance) {

    }

    @Override
    public void deregisterServerInstance(ServerInstance serverInstance) {

    }

    @Override
    public List<ServerInstance> getAllServerInstances() {
        return null;
    }

    @Override
    public void subscribe(Consumer<List<String>> consumer) {

    }
}
