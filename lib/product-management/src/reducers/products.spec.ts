import { reducer } from './products';
import * as fromProducts from './products';
import { Load, Add } from '../actions/product-actions';
import { Product, generateMockProduct } from '../models/product';


describe('ProductsReducer', () => {
    const product1 = generateMockProduct();
    const product2 = { ...product1, id: '222' };
    const product3 = { ...product1, id: '333' };
    const initialState: fromProducts.State = {
        ids: [product1.id, product2.id],
        entities: {
            [product1.id]: product1,
            [product2.id]: product2,
        },
        selectedProductId: null,
    };

    describe('undefined action', () => {
        it('should return the default state', () => {
            const result = reducer(undefined, {} as any);
            expect(result).toMatchSnapshot();
        });
    });

    describe('ADD', () => {
        const expectedResult = {
            ids: [product1.id],
            entities: {
                [product1.id]: product1,
            },
            selectedProductId: null
        };
        it('should add a single product', () => {
            const action = new Add(product1);
            const result = reducer(fromProducts.initialState, action);
            expect(result).toMatchSnapshot();
        });
    });
    describe('Selectors', () => {
        describe('getSelectedId', () => {
            it('should return the selected id', () => {
                const result = fromProducts.getSelectedId({
                    ...initialState,
                    selectedProductId: product1.id,
                });
                expect(result).toMatchSnapshot();
            });
        });
    });
});
