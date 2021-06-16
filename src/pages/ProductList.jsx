import React from 'react'
import { Icon, Menu, Table,Button } from 'semantic-ui-react'
import { useState,useEffect } from "react";
import ProductService from '../services/productService';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { product } from 'prelude-ls';
import { addToCart } from '../store/actions/cartActions';
import { toast } from 'react-toastify';

export default function ProductList() {
    const  dispatch = useDispatch()

    const [products, setProducts] = useState([]);
    
    useEffect(()=>{
        let productService = new ProductService()
        productService.getProducts().then(result=>setProducts(result.data))

    },[]);
    
    const handleAddToCart = (product)=>{
        dispatch(addToCart(product))
        toast.success()
    }

    return (
        <div>
            <Table celled>
                <Table.Header> 
                    <Table.Row>
                        <Table.HeaderCell>userId</Table.HeaderCell>
                        <Table.HeaderCell>id</Table.HeaderCell>
                        <Table.HeaderCell>title</Table.HeaderCell>
                        <Table.HeaderCell>body</Table.HeaderCell>
                        <Table.HeaderCell>Kategori</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        products.map((product)=> (
                            <Table.Row key={product.id}>
                                <Table.Cell><Link to={`/products/${product.title}`}>{product.userId}</Link></Table.Cell>
                                <Table.Cell>{product.id}</Table.Cell>
                                <Table.Cell>{product.title}</Table.Cell>
                                <Table.Cell>{product.body}</Table.Cell>
                                <Table.Cell><Button onClick={() => handleAddToCart(product)}>Sepete Ekle</Button></Table.Cell>
                            </Table.Row>
                        ))
                    }

                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
